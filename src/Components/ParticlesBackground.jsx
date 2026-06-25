import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadStarsPreset } from "@tsparticles/preset-stars";        
// Must be a stable reference across the app lifecycle (ParticlesProvider
// throws if the init callback identity changes), so define it at module scope.
const initEngine = async (engine) => {
    await loadStarsPreset(engine)
}

const options = {
    preset: 'stars',
    fullScreen: { enable: true, zIndex: -1 },
}

const ParticlesBackground = () => (
    <ParticlesProvider init={initEngine}>
        <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
)

export default ParticlesBackground
