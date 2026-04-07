# Bolt's Journal - Critical Learnings

## 2026-04-07 - Suspense boundary placement matters for Layout persistence
**Learning:** Wrapping `<Routes>` with `<Suspense>` causes the entire Layout (Navbar/Footer) to unmount and be replaced by the fallback during lazy-load transitions. The Suspense boundary must wrap `<Outlet />` inside Layout instead.
**Action:** Always place Suspense boundaries as close to the lazy component as possible — inside Layout wrapping Outlet, not outside Routes.
