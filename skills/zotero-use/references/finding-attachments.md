# Finding Attachments

When working with Zotero attachments, the storage location depends on the attachment type. This guide covers how to find the correct file path for any attachment.

## Attachment Types

Zotero supports three attachment modes, determined by the `linkMode` field:

| linkMode | Description | Storage Location |
|----------|-------------|------------------|
| `linked_file` | Linked file (stored externally) | Path stored in `path` field, relative to Linked Attachment Base Directory |
| `imported_file` | Imported file (stored in Zotero storage) | Zotero data directory (`storage/` folder) |
| `linked_url` | URL link (no local file) | No local file — use the `url` field directly |

## Finding the Linked Attachment Base Directory

If an attachment has `linkMode: "linked_file"`:

1. **From Zotero prefs.js**:
   ```
   C:\Users\<user>\AppData\Roaming\Zotero\Zotero\Profiles\<profile>\prefs.js
   ```
   Look for:
   ```
   user_pref("extensions.zotero.linkedAttachmentBaseDir", "<path>")
   ```

2. **From item metadata**:
   The `path` field in the item attachment data shows the path relative to the Linked Attachment Base Directory.
   Example: `attachments:Karki/2026/Karki et al. - 2026 - Cytokine storm.pdf`

   Combine with the base directory:
   ```
   G:\我的雲端硬碟\ZoteroLibrary\Karki\2026\Karki et al. - 2026 - Cytokine storm.pdf
   ```

## Finding Imported Attachments (Local Storage)

If an attachment has `linkMode: "imported_file"`:

1. **Default Zotero data directory**:
   ```
   C:\Users\<user>\AppData\Roaming\Zotero\Zotero\Profiles\<profile>\storage\
   ```
   Or if `extensions.zotero.useDataDir` is true in prefs.js:
   ```
   C:\Users\<user>\Zotero\storage\
   ```

2. **Storage structure**: Files are stored in subdirectories named with item keys (8-char alphanumeric IDs). Use `zot items children <parent-key>` to find the attachment key, then search the storage folder.

## Finding URL Links

If an attachment has `linkMode: "linked_url"`:
- Use the `url` field directly — there is no local file.
- Examples: Google Drive links, web URLs, proxy links to journal PDFs.

## Quick Checklist

When given an attachment item key:

1. Get item metadata: `zot items get <key> --output json`
2. Check `data.linkMode`:
   - `linked_file` → combine `data.path` with Linked Attachment Base Directory from prefs.js
   - `imported_file` → search in Zotero storage directory
   - `linked_url` → use `data.url` directly

## PowerShell Example

```powershell
# Find Linked Attachment Base Directory
Select-String "linkedAttachmentBaseDir" "$env:APPDATA\Zotero\Zotero\Profiles\*\prefs.js"

# Check if linked file exists
Test-Path "G:\我的雲端硬碟\ZoteroLibrary\Karki\2026\Karki et al. - 2026 - Cytokine storm.pdf"

# Search for file in local storage
Get-ChildItem "C:\Users\<user>\Zotero\storage" -Recurse -Filter "*keyword*"
```

## Verified Local Setup

- **Linked Attachment Base Directory**: `G:\我的雲端硬碟\ZoteroLibrary`
- **Local Zotero storage**: `C:\Users\jethr\Zotero\storage`
- **Profile directory**: `C:\Users\jethr\AppData\Roaming\Zotero\Zotero\Profiles\t4yjhwyt.default`
- **User ID**: 11186988 (library type: user, library id: 0)