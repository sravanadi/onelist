cd e:\antigarity\onelist
git add -A
git commit -m "feat: OneList Games rebrand, Fly Cat game integration & SEO

- Rename 'Online Games' to 'OneList Games' across navbar, categories, SEO meta
- Fix Fly Cat game: no-scroll iframe, fixed logo/nav positions
- Add professional game card with icon in SiteCard component
- Add ~700 word SEO content with links to CrazyGames, PlayHop, Yahoo Games, Google Games
- Add 8-question FAQ section with collapsible details
- Update metadata with keywords and OpenGraph tags
- Fix hydration warning from ad scripts in layout.tsx
- Fix Fly Cat logo path (was 404, now uses favicon.png)"
git push origin main
Write-Host "Done! Changes pushed to GitHub." -ForegroundColor Green
pause
