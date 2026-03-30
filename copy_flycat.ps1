# Copy professional Fly Cat game files to the OneList public directory
$source = "C:\Users\srava\Downloads\app-aj7c2wnphywx_app_version-aj7x3967v669\app-aj7c2wnphywx\dist"
$dest = "e:\antigarity\onelist\public\games\flycat"

# Remove old standalone game files that are no longer needed
Remove-Item "$dest\audio.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\background.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\cat.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\game.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\obstacles.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\score.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\screens.js" -ErrorAction SilentlyContinue
Remove-Item "$dest\style.css" -ErrorAction SilentlyContinue

# Copy all dist files (index.html, favicon.png, assets/)
Copy-Item -Path "$source\*" -Destination "$dest" -Recurse -Force

Write-Host "Done! Professional Fly Cat game files copied successfully." -ForegroundColor Green
Write-Host "Files copied from: $source" 
Write-Host "Files copied to:   $dest"
Write-Host ""
Write-Host "Press any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
