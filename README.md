# Pelilauta store

The datatypes, helpers, and other utilities for the Pelilauta firestore database.

## Ref Skaldstore

This package will replace skaldstore. The functions used to convert these classes to
firestore storables, will be released in a client and server packages (as the process
is different for both).

## Data Model

The data model is based on the following classes:
- [Storable](lib/abstractModels/Storable.ts) - The base class for all storable objects
- [Entry](lib/abstractModels/Entry.ts) - The base class for all _Storable_ data entries. This is not inherited by technical and transactional artefacts.
- [ContentEntry](lib/abstractModels/ContentEntry.ts) - The base class for all _Entries_ with content that can be managed, indexed and searched.

### Content Entries

The following content entries have been ported from skaldstore:
- [BlogPost](lib/contentEntries/BlogPost.ts) - A skaldstore _article_, representing a blog post.
