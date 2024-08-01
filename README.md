<h3 id="drcode-wrapper">drcode-wrapper</h3>
<p><strong>drcode-wrapper</strong> is an npm package that provides a wrapper around Sentry, making it easy to configure and use Sentry&#39;s features, including profiling and error handling, with TypeScript support.</p>
<h4 id="installation">Installation</h4>
<p>To install the package, run:</p>
<p>bash</p>
<p>Copy code</p>
<pre><code class="language-const">npm install drcode-wrapper </code></pre>

<h4 id="getting-started">Getting Started</h4>
<p><strong>Basic Usage</strong></p>
<p>javascript</p>
<p>Copy code</p>
<pre><code class="language-const">
const { initDrcode, setUpErrorHandler } = require('drcode-wrapper');
const express = require('express');

const config = {
protocol: 'https',
publicKey: 'yourPublicKey',
host: 'sentry.io',
port: 443,
projectId: 'yourProjectId',
tracesSampleRate: 1.0, // optional
profilesSampleRate: 1.0 // optional
};

// Initialize drcode-wrapper
initDrcode(config);

// Express.js example for setting up error handler
const app = express();

app.use(setUpErrorHandler);

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
</code></pre>

<h4 id="configuration">Configuration</h4>
<p><strong>Configuration Object</strong></p>
<ul>
<li><code>protocol</code> (string): The protocol to use (e.g., &#39;https&#39;).</li>
<li><code>publicKey</code> (string): The public key for Sentry.</li>
<li><code>host</code> (string): The Sentry host (e.g., &#39;sentry.io&#39;).</li>
<li><code>port</code> (number): The port for the Sentry server.</li>
<li><code>projectId</code> (string): The Sentry project ID.</li>
<li><code>tracesSampleRate</code> (number, optional): The sample rate for tracing (default: 1.0).</li>
<li><code>profilesSampleRate</code> (number, optional): The sample rate for profiling (default: 1.0).</li>
</ul>
<h4 id="api-reference">API Reference</h4>
<p><strong>Methods</strong></p>
<ul>
<li><p><strong>initDrcode(config: DrCodeConfig): void</strong></p>
<p>Initializes Sentry with the provided configuration.</p>
<ul>
<li><strong>config</strong> (DrCodeConfig): The configuration object.</li>
</ul>
</li>
<li><p><strong>setUpErrorHandler(err: Error, req: any, res: any, next: any): void</strong></p>
<p>Middleware for capturing exceptions in an Express.js application.</p>
</li>
</ul>
<p><strong>TypeScript Support</strong></p>
<p>The package includes TypeScript definitions for better developer experience.</p>
<p><strong>index.d.ts</strong></p>
<p>typescript</p>
<p>Copy code</p>
<pre><code class="language-const"> interface DrCodeConfig {
  protocol: string;
  publicKey: string;
  host: string;
  port: number;
  projectId: string;
  tracesSampleRate?: number;
  profilesSampleRate?: number;
}

export function initDrcode(config: DrCodeConfig): void;

export function setUpErrorHandler(
err: Error,
req: any,
res: any,
next: any
): void;

</code></pre>

<h4 id="license">License</h4>
<p>This project is licensed under the MIT License.</p>
<h4 id="version">Version</h4>
<p>1.7.1</p>
