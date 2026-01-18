# PocketBase Admin Panel Access

## Admin Panel URL

Once PocketBase is running, you can access the admin panel at:

**Local Development:**
```
http://127.0.0.1:8090/_/
```

**Production:**
```
https://your-pocketbase-instance.com/_/
```

## First-Time Setup

1. **Start PocketBase:**
   ```bash
   ./pocketbase serve
   ```
   Or if installed globally:
   ```bash
   pb serve
   ```

2. **Create Admin Account:**
   - When you first access the admin panel, you'll be prompted to create an admin account
   - Enter your email and password
   - This account will have full access to manage collections and data

## Creating Collections

After logging in, create these collections with the following fields:

### 1. Collection: `project_content`

**Fields:**
- `key` - Text field, required, unique
- `title` - Text field, required
- `content` - Text field, required

**Example Records:**
- `home_hero` - Hero section title
- `home_vision` - Vision statement for home page
- `about_description` - About page description
- `about_vision` - Long-term vision

### 2. Collection: `services`

**Fields:**
- `title` - Text field, required
- `description` - Text field, required
- `icon` - Text field, optional (for future use)
- `order` - Number field, required (for sorting)

### 3. Collection: `showcase`

**Fields:**
- `title` - Text field, required
- `description` - Text field, required
- `image` - Text field, optional (URL or filename)
- `category` - Text field, optional
- `featured` - Boolean field, required (default: false)
- `order` - Number field, required (for sorting)

## Managing Content

1. Navigate to the collection you want to edit
2. Click "New Record" to add new content
3. Click on any existing record to edit it
4. All changes are saved immediately

## API Access

The PocketBase admin panel also provides:
- **API documentation** - View available endpoints
- **File storage** - Manage uploaded files (for future media features)
- **User management** - Manage authentication (for future admin features)
- **Collection settings** - Configure validation rules, indexes, etc.

## Environment Variable

Make sure your `.env.local` file has:
```
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
```

For production, update this to your PocketBase instance URL.

## Tips

- Use the "View API" button in each collection to see the generated API endpoints
- Enable "Enable API access" in collection settings to allow API requests
- The admin panel has built-in data validation - configure rules in collection settings
- Export/import data using the options in the admin panel for backup
