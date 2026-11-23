# Spaceborn project knowledge

- [[Architecture]] — routes, homepage components, assets, and run commands.
- [[Homepage]] — homepage messaging, references, and verification.
- [[Redesign-trial-1]] — the separate redesign branch and its visual decisions.

## Local knowledge workflow

The project root contains `.graphifyignore`. Source and authored documentation are
included; dependencies, media, generated output, credentials, and applicant data
are excluded. Project data stays local unless an external action is authorized.

- Graph: `graphify-out/graph.json`
- Graph report: `graphify-out/GRAPH_REPORT.md`
- Interactive graph: `graphify-out/graph.html`
- Obsidian vault: `graphify-out/obsidian/`
- CLI: `/home/sa3d/.local/bin/graphify`

Query the graph before substantial investigation, then verify important findings
against current source. Use `graphify update .` after source changes; refresh
semantic extraction for changed documentation using the installed Graphify skill
and the host agent. Do not introduce a paid extraction service by default.

From the repository root, run `graphify export obsidian` and
`graphify export html` after updating the graph. Preserve authored notes. The vault
contains a `Project knowledge` link to this directory, outside generated exports.
Generated graph files and extraction caches are ignored by Git.

The AST extractor emits references to external packages, configuration patterns,
and CSS files without corresponding nodes. The local graph normalization helper
at `graphify-out/refresh.py` supplies those reference nodes from explicit source
statements and preserves multiple relationships as evidence on merged edges.
