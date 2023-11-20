import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import { crash } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = ({ request }) => {
  if (request.url.includes("crash-loader")) {
    crash("crash-loader");
  }
  return null;
};

export default function Index() {
  const location = useLocation();

  if (import.meta.env.SSR && location.search.includes("crash-server-render")) {
    crash("crash-server-render");
  }
  if (!import.meta.env.SSR && location.search.includes("crash-client-render")) {
    crash("crash-client-render");
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {["crash-loader", "crash-server-render", "crash-client-render"].map(
          (v) => (
            <li key={v}>
              <Link to={"/?" + v}>{v}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
