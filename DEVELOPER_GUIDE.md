# 🗺️ Developer Guide: Navigating the AI-Learn Platform

Welcome to the codebase! If you are new to programming, looking at a modern web project can feel like entering a massive library without a map. This guide is your "museum tour"—it explains not just *where* things are, but *why* they are built this way.

---

## 🏗️ The Big Picture (The Mental Model)

Think of this project as a **Dynamic Museum**.
- **Next.js** is the building itself.
- **FastAPI backend** is the museum's back office (handles accounts, saves progress to a database).
- **Routes (Folders)** are the exhibition halls.
- **Centralized Data** is the museum catalog that describes every item.
- **Components** are the display cases and lighting (reusable parts).
- **LocalStorage** is the guest notebook (for visitors without an account). Logged-in visitors get a permanent record stored in the database.

---

## 🚦 Step 1: The Identity Card (`package.json`)
Every JavaScript project starts here. 
- **What to look for:** The `"dependencies"` section. 
- **Why it matters:** It lists the "tools" we borrowed to build this. You'll see `next` (the framework), `react` (the UI library), and `tailwindcss` (for styling).
- **Instruction:** Open `package.json` just to see the names of the tools we use.

---

## 📂 Step 2: The Map of the Building (`src/app`)
We use a system called **App Router**. In Next.js, folders inside `src/app` automatically become website addresses (URLs).
- **The Locale Folder `[lang]`**: You'll notice almost everything is inside a folder named `[lang]`. This is a "dynamic segment." It allows the site to work for both `.../en/` and `.../ru/` using the same code.
- **The Room Logic `src/app/[lang]/rooms/[id]`**: 
    - The `[id]` folder is the most important part of my recent update. 
    - Instead of creating 10 separate files for 10 rooms, we created **one dynamic page** that asks: *"Which room ID is the user visiting?"* and then pulls the right data from our catalog.

---

## 🗄️ Step 3: The Catalog (The "Single Source of Truth")
Look at `src/data/rooms.ts`. 
- **The Concept:** In the past, room names and tasks were scattered everywhere. If you wanted to change a typo, you had to find it in three different files.
- **The Fix:** We moved everything into `ROOMS_METADATA` and `ROOM_TASKS`. 
- **Instruction:** Open `src/data/rooms.ts`. Notice how it’s just a big list (an Array) of objects. If you want to add a new room, you just add a new object to this list!

---

## 🧩 Step 4: The Display Cases (`src/components`)
Components are small, reusable pieces of UI.
- **`TaskQuestion.tsx`**: This handles the logic for checking if an answer is right. It doesn't care *which* question it's showing; it just knows how to show an input box and a "Check" button.
- **`src/components/theory/`**: This is where the "reading material" lives. We separated the text (Theory) from the layout (the Room Page) so the code stays clean.
- **`src/components/Term.tsx` + `src/data/glossary.ts`**: This pair powers terminology tooltips. `Term` receives `id` + `lang`, looks up the entry in `GLOSSARY`, and renders a hover definition. If you see raw text like `<Term ...>` on screen, that usually means the term was written as a plain string instead of JSX.

---

## 🧠 Step 5: The Brains (`src/hooks/useProgress.ts` & `src/hooks/useAuth.tsx`)
How does the site remember you finished a task?
- **Custom Hooks**: We use a "hook" called `useProgress`.
- **How it works:** If you are logged in, it talks to the backend API (`/api/progress/{room_id}`) to save and load progress from the database. If you are not logged in, it falls back to the browser's `localStorage`.
- **Authentication hook (`useAuth`):** The `AuthProvider` wraps the whole app. It provides `login()`, `signup()`, `logout()`, and `user` (profile data fetched from `/api/me`). Components like Navbar and Sidebar read from this context to show real points, streak, and username.
- **Instruction:** Look at `src/hooks/useProgress.ts` and `src/hooks/useAuth.tsx`. Together, they are the bridge between the user's actions and the server's memory.

---

## 🌍 Step 6: The Language Switcher (`src/dictionaries`)
Since the app supports Russian and English, we can't hardcode words like "Submit" or "Search."
- **Dictionaries**: We use JSON files (`en.json`, `ru.json`) to store UI labels. 
- **Middleware**: The file `src/middleware.ts` is like a security guard at the front door. If someone visits the site without a language (like just `ai-learn.com/`), the guard redirects them to `/ru/` automatically.

---

## 🛠️ Summary for Beginners: How to add a new room?
If you wanted to add a new lesson today, here is the "Roadmap":
1. **Add Metadata**: Add the room title and description to `src/data/rooms.ts`.
2. **Add Tasks**: Add the questions/answers to the `ROOM_TASKS` object in the same file.
3. **Write Theory**: Create a new file in `src/components/theory/` with your lesson text.
4. **Connect it**: Add your new theory component to the mapping in `src/app/[lang]/rooms/[id]/page.tsx`.

**That's it!** The dynamic routing handles the rest. You don't need to create new folders or complex logic.

---

## 🔐 Step 7: The Back Office (`backend/`)
The backend is a separate Python project inside the same repo.
- **FastAPI** handles HTTP requests (signup, login, save progress, fetch profile).
- **PostgreSQL** stores user accounts and progress permanently.
- **SQLAlchemy** is the "translator" between Python objects and database rows.
- **Alembic** manages database schema changes (migrations).
- **How auth works:** When you sign up or log in, the backend creates a JWT token and stores it in an httpOnly cookie. Every subsequent request includes this cookie, so the backend knows who you are.
- **Instruction:** Look at `backend/app/api/auth/router.py` to see the signup/login endpoints, and `backend/app/api/progress/router.py` to see how task completion is saved.

---

## 💡 Pro-Tip
When you look at code, don't try to understand every line at once. Follow the **Data**.
Ask: *"Where does this text start (the data), and how does it get to the screen (the component)?"*
If you can answer that, you understand the infrastructure!
