# Key Decisions
- **Design System Override**: Using Stitch "Cinematic Precision". Strictly no 1px solid borders (`border-gray-200` prohibited). Replaced with ghost borders `rgba(255,255,255,0.06)`.
- **Price List Legibility**: Instead of borders, the Price List table will use alternating row backgrounds `rgba(255,255,255,0.04)`.
- **Animation Engine**: Using GSAP across the app for smooth transitions instead of standard CSS transitions.
- **Localization**: Utilizing react-i18next with an embedded EN/ID top-level switch.
