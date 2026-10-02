QuickBill – shop billing app (ready-to-host build)
===================================================

FILES
  index.html     the whole app
  manifest.json  lets shops "Install" it like an app
  sw.js          lets it keep working when the internet drops
  icon-192.png, icon-512.png

HOW TO PUT IT ONLINE (free, pick one)
  1. Cloudflare Pages: Workers & Pages > Create > Pages > Upload assets, upload this folder.
  2. Netlify: app.netlify.com/drop, drag this folder in.
  3. GitHub Pages: upload these files to a repository, Settings > Pages > deploy from main branch.
  The address must start with https:// for install and offline mode to work.

HOW A SHOP STARTS USING IT
  1. Open the link on the shop phone or counter computer.
  2. Phone: browser menu > Add to Home screen. Computer (Chrome/Edge): install icon in the address bar.
  3. First launch: create the owner account (shop name, name, 4-digit PIN, security password, UPI ID).
  4. Items > Bulk import to load the inventory (paste from Excel or load a CSV).
  5. Settings (gear on the home screen): turn features on or off, add cashier accounts.

THINGS TO KNOW BEFORE SELLING
  - Data is stored inside the browser of each device. Phone and computer do NOT share data yet.
    Use Settings > Export backup regularly (and Restore backup to move data to another device).
  - Clearing browser data erases the shop's data. Keep a backup.
  - PIN and security password protect against casual use. They are not bank-grade security.
  - UPI QR shows the bill amount for the customer to scan. The app cannot confirm the payment arrived.
  - SMS opens the phone's own messaging app with the bill typed in. The cashier taps Send.
  - The QR picture library loads from the internet the first time (then it is saved for offline use).
  - Bill-photo scanning only works inside Claude, so it is hidden in this hosted version.

UPDATING
  Replace index.html. If shops do not see the new version, change the version number (now 'quickbill-v3') in sw.js.
