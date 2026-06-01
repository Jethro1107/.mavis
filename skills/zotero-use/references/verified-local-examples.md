# Verified Local Examples

Verified on this machine on 2026-06-01.

## Zotero Setup

- **Shell command**: `zot` (Pyzotero CLI via `uv tool`)
- **Zotero local HTTP API**: enabled at `localhost:23119`
- **User ID**: 11186988
- **Working mode**: `--local --library-id 0 --library-type user` flag on all commands

## Standard zot invocation pattern

Always prefix commands with:
```bash
zot --local --library-id 0 --library-type user
```

Examples:
- Search: `zot --local --library-id 0 --library-type user items list --query "..." --limit 5 --output table`
- Get item: `zot --local --library-id 0 --library-type user items get <KEY> --output table`
- List collections: `zot --local --library-id 0 --library-type user collections list --top --output table`

## Collection Tree (as of 2026-06-01)

Top-level specialty collections (numbered by year/stage):

| Collection | Key | Sub-collections |
|---|---|---|
| 01 Internal Medicine | GPMSFXMT | Cardiology, Dermatology, ENT, Haematology, Infectious Disease, Nephrology, Neurology, Oncology, Rehab Medicine, Respiratory, Rheumatology |
| 02 Psychiatry | N7YUWL9Y | Alcohol, Antidepressants, Anxiety, Bipolar, Child Psychiatry, Cognitive Impairments, Depression, Eating Disorders, Neurobiology, OCD, Psychopathology, Schizophrenia, Substances, Theories of Psychoanalysis |
| 03 FMPC | DEFRUVW5 | Consultation and Counselling, MUPS, MSK Medicine, Pain |
| 04 Paediatrics | 3EW9LU7M | Cardiology, Infectious Disease, Neonatal, Neurology, Respiratory |
| 05 Surgery | AELXF3CQ | Colorectal, ENT, Plastics, Urology |
| 06 Orthopaedics | PBZFMB6L | Elbow, Knee, Shoulder, Spine |
| 07 Emergency Medicine | H9Z5RUVX | (empty) |
| 08 O&G | SFYDCIB7 | Gynaecology, Menopause |

Standalone collections at root:
- `Learning and Note-taking` (KT89PY3X) — 7 items
- `ML in ICU` (5RT2P64C) — 29 items
- `Potassium and ICU outcomes` (RG7UXR9D) — 3 items

## Linked Attachment Storage

- **Linked Attachment Base Directory**: `G:\我的雲端硬碟\ZoteroLibrary`
- PDFs stored as: `G:\我的雲端硬碟\ZoteroLibrary\<AuthorLastName>\<Year>\<Author> - <Year> - <Title>.pdf`
- Example path: `G:\我的雲端硬碟\ZoteroLibrary\Collins\2026\Collins et al. - 2026 - Title.pdf`
- **Local Zotero storage** (imported files only): `C:\Users\jethr\Zotero\storage`
- **Profile directory**: `C:\Users\jethr\AppData\Roaming\Zotero\Zotero\Profiles\t4yjhwyt.default`

When `linkMode` is `linked_file`, combine item's `data.path` (relative) with `G:\我的雲端硬碟\ZoteroLibrary`.

BetterBibtex citekey is stored in `data.citationKey` field in the JSON output of `zot items get <KEY> --output json`. Example: `carhart-harrisMourningMelancholiaRevisited2008`.

## Finding item children/attachments

```bash
zot --local --library-id 0 --library-type user items children <PARENT_KEY> --output json
```

Use this to find attachment keys, then locate the PDF path.

## Obsidian Vault (for reference)

- Vault name: `Notes`
- Vault path: Obsidian default (auto-detected by CLI)
- Folder structure: `daily/`, `img/`, `index/`, `main/`, `references/`, `templates/`
- Daily notes active from Feb 2025 onward
