#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Strip rm-style flags
const RM_FLAGS = new Set(['-r', '-f', '-rf', '-fr', '--recursive', '--force', '-R', '--']);
const files = process.argv.slice(2).filter((arg) => !RM_FLAGS.has(arg));

if (files.length === 0) {
  process.stderr.write('mavis-trash: no files specified\n');
  process.exit(1);
}

function trashFile(filePath) {
  // Resolve to absolute path
  const absPath = path.resolve(filePath);

  // Check existence (including broken symlinks via lstatSync)
  let stat;
  try {
    stat = fs.lstatSync(absPath);
  } catch {
    process.stderr.write(`mavis-trash: '${absPath}': No such file or directory\n`);
    return false;
  }

  // Escape single quotes for PowerShell string literal
  const escaped = absPath.replace(/'/g, "''");

  // Pick the right API: DeleteFile for files/symlinks, DeleteDirectory for directories
  const method = stat.isDirectory() && !stat.isSymbolicLink()
    ? 'DeleteDirectory'
    : 'DeleteFile';

  const psCommand = [
    'Add-Type -AssemblyName Microsoft.VisualBasic;',
    `[Microsoft.VisualBasic.FileIO.FileSystem]::${method}(`,
    `  '${escaped}',`,
    `  'OnlyErrorDialogs',`,
    `  'SendToRecycleBin'`,
    ')',
  ].join(' ');

  try {
    execSync(`powershell.exe -NoProfile -NonInteractive -Command "${psCommand}"`, {
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
      timeout: 30000,
    });
    return true;
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString().trim() : err.message;
    process.stderr.write(`mavis-trash: failed to trash '${absPath}': ${stderr}\n`);
    return false;
  }
}

let exitCode = 0;
for (const file of files) {
  if (trashFile(file)) {
    process.stdout.write(`mavis-trash: moved to trash: '${file}'\n`);
  } else {
    exitCode = 1;
  }
}

process.exit(exitCode);
