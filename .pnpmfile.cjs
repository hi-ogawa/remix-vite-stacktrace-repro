// cf. https://pnpm.io/aliases

const aliases = {
  "@remix-run/server-runtime": "workspace:*",
  "@remix-run/dev": "workspace:*",
}

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies) {
        for (const k in aliases) {
          if (k in pkg.dependencies) {
            pkg.dependencies[k] = aliases[k];
          }
        }
      }
      return pkg;
    }
  }
}
