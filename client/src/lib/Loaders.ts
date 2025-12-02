import { Services } from "@/lib/utils";

export function serviceLoader({ params }: { params: any }) {
  const id = Number(params.id);

  if (isNaN(id) || id < 0 || id >= Services.length) {
    throw new Response("Service not found", { status: 404 });
  }

  return Services[id];
}
