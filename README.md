
---

# TypeScript Setup Guide

This guide provides a simple process for setting up TypeScript in your project and automating compilation.

---

## Steps to Setup TypeScript

### 1. **Install TypeScript Globally**

Install TypeScript globally:

```bash
npm install -g typescript
```

### 2. **Create Project Structure**

```bash
mkdir src    # Source TypeScript files
touch index.ts  # Main TypeScript file
mkdir dist   # Compiled JavaScript files
```

### 3. **Initialize tsconfig.json**

Generate a TypeScript configuration file:

```bash
tsc --init
```

### 4. **Configure tsconfig.json**

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### 5. **Compile TypeScript**

Navigate to `src` and compile TypeScript:

```bash
cd src
tsc
```

### 6. **Automate Compilation with Watch Mode**

Automatically compile TypeScript on changes:

```bash
tsc --watch
```

### 7. **Run Compiled JavaScript**

Run the compiled JavaScript with Node.js:

```bash
node --watch dist/index.js
```

---

This setup ensures TypeScript is compiled to JavaScript seamlessly, with watch modes for real-time updates.