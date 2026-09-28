import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$lang}/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
