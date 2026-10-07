# Deva Workfolio — GitHub Pages edition

A free-to-host static portfolio with Hey Buddy featured, source and download links, custom illustrations, and an export/import editor. Includes the complete original server-based source in `original-server-source/` for reference.

## Publish without installing anything

The `docs/` folder is already built and ready to host.

1. Create a **public** GitHub repository named `deva-workfolio` under `DEVAECE`.
2. Extract this ZIP. Upload the **contents** of `docs/` into a folder named `docs` in the repository. GitHub’s web uploader accepts folders; drag the folder in and commit it to `main`.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: /docs**, and Save.
5. Wait for deployment to finish. GitHub shows the live link in Settings → Pages. For the suggested repository name, the expected address is `https://devaece.github.io/deva-workfolio/` (not live until you publish).

This path does not need a build workflow. It publishes the prebuilt files.

## Publish the full editable source with automatic builds

Recommended if you plan to update the site regularly.

1. Create a public repository named `deva-workfolio`.
2. Upload the package’s source files and folders to the repository root (do not nest them inside `workfolio-github/`). The `original-server-source/` folder is a reference archive; it can be left out of the repository.
3. Ensure `.github/workflows/pages.yml` is present. Some file pickers hide dot-folders: create this exact file in GitHub and paste the included workflow if needed.
4. In **Settings → Pages**, set **Source: GitHub Actions**.
5. Open **Actions → Publish Workfolio**. It runs on every push to `main`; you can also select **Run workflow** manually.
6. The successful deployment shows your public URL in Settings → Pages.

The workflow installs locked dependencies, checks TypeScript, builds, and publishes `docs/`. It needs no API keys or external hosting account.

## Add and edit projects

- Select **Manage** on the website, or open `?manage=1`.
- Edit your introduction or add/edit/delete projects.
- Add GitHub repository links, download/release links, summaries, tags, images, videos, and documents.
- Select **Apply project changes** to update the preview.
- Select **Export portfolio.json** to download the complete updated collection.
- **Automatic-build setup:** replace `public/portfolio.json` in the repository with the export, then commit. The workflow republishes it.
- **Prebuilt /docs setup:** replace `docs/portfolio.json` with the export and commit. No rebuild is required for content changes.
- To resume an unsaved editing session, import your exported JSON through **Manage**.

The editor does not write directly to GitHub. Its preview exists only in the current browser tab, and refresh discards unexported changes. Anyone can open an editor preview, but only people with repository write access can publish changes. There is no server-side login, database, or cloud-upload service in this edition.

## Attachments

- Embed supported images, MP4/WebM clips, PDFs, or text files up to 5 MB in the exported JSON.
- For larger files, upload them to GitHub Releases or another public host and attach a URL. YouTube video URLs can be embedded.
- For efficient galleries, add files to `public/images/` and use a relative URL such as `images/my-project.webp`. Rebuild after adding files in the source setup; in the prebuilt setup, upload to `docs/images/` directly.
- Document and resource links open in a separate tab. Download links point to the original GitHub release assets; installers are not stored in this portfolio.

## Local development

Install Node.js 22.13 or newer, then run:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm run dev
```

To validate and build:

```sh
pnpm run check
pnpm run build
pnpm run preview
```

The build uses relative asset paths and works under a repository subpath, a custom domain, or a username GitHub Pages site. The `public/portfolio.json` file is the published content source of truth. `src/project-data.ts` provides the initial display during loading; update it too when changing the initial featured project identity. You do not need to change it for ordinary content edits loaded from JSON.

## Included project and images

Hey Buddy source: https://github.com/DEVAECE/hey-buddy
Release: https://github.com/DEVAECE/hey-buddy/releases/tag/v1.0.4

The two robot illustrations were generated for this portfolio. They are conceptual artwork, not application screenshots. The avatar was supplied in the Hey Buddy repository. The feature descriptions reflect the v1.0.4 README/release/setup documentation, including the distinction between offline speech recognition and provider-connected AI requests.

## Source layout

- `src/Portfolio.tsx`: showcase and preview editor.
- `src/style.css`: desktop/mobile theme.
- `src/main.tsx`: standalone React entry.
- `src/project-data.ts`: initial featured-project data.
- `public/portfolio.json`: editable public content.
- `public/images/`: illustrations and avatar.
- `docs/`: ready-to-publish static website.
- `.github/workflows/pages.yml`: automatic GitHub Pages deployment.
- `original-server-source/`: all tracked source from the original hosted site, including its API routes, database schema/migrations, storage/auth helpers, and platform build integration.

The original server source is preserved for completeness. It depends on its original hosting platform and Cloudflare D1/R2 bindings; GitHub Pages cannot run those server APIs. Its project identifier was removed from the export to avoid binding your copy to the existing hosted site. No credentials, local environment files, dependency directories, or Git history are included.

## Hosting notes

GitHub Pages supports public repositories on GitHub Free. Its normal service limits apply; see https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits. The published portfolio and committed data are public. This export does not alter or delete your existing hosted Workfolio.
