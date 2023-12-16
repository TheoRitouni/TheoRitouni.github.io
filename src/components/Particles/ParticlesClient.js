import { ClientOnly } from "remix-utils/client-only";
import Particles from "./Particles";

export default function ParticlesC() {
	return (
		<ClientOnly>
			 <Particles />
		</ClientOnly>
	);
}