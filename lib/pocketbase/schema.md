# PocketBase Schema

This document describes the required collections and fields for the Viewers application.

## Collections

### 1. `project_content`

Stores general project content and descriptions.

**Fields:**
- `key` (text, required, unique) - Unique identifier for the content piece (e.g., "home_hero", "about_vision")
- `title` (text, required) - Title of the content
- `content` (text, required) - Main content/description

**Example records:**
- `home_hero` - Hero section content
- `home_vision` - Vision statement for home page
- `about_description` - About page description
- `about_vision` - Long-term vision

### 2. `services`

Stores service offerings.

**Fields:**
- `title` (text, required) - Service name
- `description` (text, required) - Service description
- `icon` (text, optional) - Icon identifier (for future use)
- `order` (number, required) - Display order

**Example records:**
- Visual Advertising
- Branding & Identity
- Digital Display Solutions
- Future-Ready Tech Services

### 3. `showcase`

Stores showcase/gallery items.

**Fields:**
- `title` (text, required) - Project/Item title
- `description` (text, required) - Project description
- `image` (text, optional) - Image URL or filename (for future media uploads)
- `category` (text, optional) - Category/tag
- `featured` (boolean, required, default: false) - Whether to feature on home page
- `order` (number, required) - Display order

## Setup Instructions

1. Start PocketBase: `./pocketbase serve`
2. Go to admin UI: http://127.0.0.1:8090/_/
3. Create each collection with the fields listed above
4. Add some initial data records

## Future Enhancements

- Add file/image fields for media uploads
- Add authentication collection for admin access
- Add CMS collections for dynamic content management
