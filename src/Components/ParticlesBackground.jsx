import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Must be a stable reference across the app lifecycle (ParticlesProvider
// throws if the init callback identity changes), so define it at module scope.
const initEngine = async (engine) => {
    await loadSlim(engine)
}

// Watery, rippling particle field: blue/cyan droplets that drift, connect with
// faint links, and repulse away from the cursor like displaced water.
const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: ['#9ddff5', '#4fc3f7', '#2936c0'] },
        links: {
            enable: true,
            color: '#9ddff5',
            distance: 140,
            opacity: 0.25,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
        },
        opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 4 } },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
        },
        modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 12 },
        },
    },
}

const ParticlesBackground = () => (
    <ParticlesProvider init={initEngine}>
        <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
)

export default ParticlesBackground
