# NuiFlo Next.js Seed Template

This is the official NuiFlo Next.js 15 seed template with Prisma, Tailwind CSS, and TypeScript.

## 🎯 Template Conventions

This template enforces strict conventions to ensure consistency across all generated projects:

### Naming Conventions
- **Route parameters**: camelCase (`userId`, `projectId`, `taskId`)
- **File names**: PascalCase for components, lowercase-with-hyphens for others
- **API endpoints**: plural nouns (`/api/users`, `/api/projects`)
- **Database columns**: snake_case with `@map()` directive

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── api/
│       └── health/
│           └── route.ts    # Example API route
├── components/
│   └── ui/                 # shadcn/ui components (to be added)
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # Type definitions
```

### API Route Conventions
Follow the pattern in `src/app/api/health/route.ts`:
1. Import dependencies at top
2. Export async function for each HTTP method (GET, POST, PUT, DELETE)
3. Use try-catch for error handling
4. Return `NextResponse.json()` for responses
5. Use proper HTTP status codes

### Database Conventions
- Base `User` model is already defined - **DO NOT MODIFY**
- Add new models BELOW the User model in `prisma/schema.prisma`
- Use `import { prisma } from '@/lib/prisma'` for database access
- All new models should include `createdAt` and `updatedAt` fields

### Component Conventions
- Use TypeScript for all components
- Use `cn()` utility for conditional Tailwind classes
- Props interfaces should be named `ComponentNameProps`
- Export components as named exports

## 🚀 Getting Started

1. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your database:**
   - Update `DATABASE_URL` in `.env.local`
   - Run: `npm run db:push`

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Visit your app:**
   - Open [http://localhost:3000](http://localhost:3000)
   - Check API health at [http://localhost:3000/api/health](http://localhost:3000/api/health)

## 📝 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Create and apply migration

## 🏗️ Extending the Template

When adding new features, follow these patterns:

### Adding API Routes
```typescript
// src/app/api/projects/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany()
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
```

### Adding Database Models
```prisma
// Add to prisma/schema.prisma
model Project {
  id          String   @id @default(cuid())
  name        String
  description String?
  userId      String   @map("user_id")
  user        User     @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("projects")
}
```

### Adding Components
```typescript
// src/components/ProjectCard.tsx
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  projectId: string // Note: camelCase for consistency
  className?: string
}

export function ProjectCard({ projectId, className }: ProjectCardProps) {
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      {/* Component content */}
    </div>
  )
}
```

## 🎨 Styling with Tailwind

This template includes Tailwind CSS with a basic configuration. Use the `cn()` utility for conditional classes:

```typescript
import { cn } from '@/lib/utils'

// Example usage
<button className={cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-500 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
  Click me
</button>
```

## 📚 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.x
- **Database**: PostgreSQL with Prisma ORM 6.x
- **Styling**: Tailwind CSS 3.x
- **UI Components**: Ready for shadcn/ui
- **Development**: ESLint + Prettier

## 🤝 Contributing

This is a seed template. When making improvements:

1. Keep conventions consistent
2. Update this README with any new patterns
3. Ensure backward compatibility
4. Test with real project generation

## 📄 License

This template is provided as-is for NuiFlo project generation.
