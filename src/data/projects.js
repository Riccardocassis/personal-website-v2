// Single source of truth for the project list — card images + routing.
// Used by the Lavori grid (Projects.vue) and by the prev/next preview
// (ProjectPrevNext.vue), so both stay in sync automatically.

import medeghiniCard from '../assets/medeghini-cover-card.webp?w=800&format=webp&as=src'

import controlAltA from '../assets/controlaltcanc-a.webp?w=800&format=webp&as=src'
import controlAltB from '../assets/controlaltcanc-b.webp?w=800&format=webp&as=src'

import fillboA from '../assets/fillbo-a.webp?w=800&format=webp&as=src'
import fillboB from '../assets/fillbo-b.webp?w=800&format=webp&as=src'

import gibsonA from '../assets/gibson-a.webp?w=800&format=webp&as=src'
import gibsonB from '../assets/gibson-b.webp?w=800&format=webp&as=src'

import hellerA from '../assets/hellergarden-a.webp?w=800&format=webp&as=src'
import hellerB from '../assets/hellergarden-b.webp?w=800&format=webp&as=src'

import robertoA from '../assets/roberto-a.webp?w=800&format=webp&as=src'
import robertoB from '../assets/roberto-b.webp?w=800&format=webp&as=src'

import sizexlA from '../assets/sizexl-a.webp?w=800&format=webp&as=src'
import sizexlB from '../assets/sizexl-b.webp?w=800&format=webp&as=src'

import synapsesA from '../assets/synapses-a.webp?w=800&format=webp&as=src'
import synapsesB from '../assets/synapses-b.webp?w=800&format=webp&as=src'

import webableA from '../assets/webable-a.webp?w=800&format=webp&as=src'
import webableB from '../assets/webable-b.webp?w=800&format=webp&as=src'

import opsifyA from '../assets/opsify-a.webp?w=800&format=webp&as=src'
import opsifyB from '../assets/opsify-b.webp?w=800&format=webp&as=src'

/* PROJECT DATA — order = default "Tutti" layout on the Lavori grid */
export const allProjects = [
  { key: 'project10', to: '/projects/medeghini',                img: medeghiniCard, imgHover: medeghiniCard, category: 'webDesign',    offset: '1' },
  { key: 'project1', to: '/projects/gibson-sg-1961',           img: gibsonA,      imgHover: gibsonB,      category: 'webDesign',     offset: '2' },
  { key: 'project2', to: '/projects/sizexl-website',           img: sizexlA,      imgHover: sizexlB,      category: 'webDesign',     offset: '1' },
  { key: 'project3', to: '/projects/synapses-laba',            img: synapsesA,    imgHover: synapsesB,    category: 'webDesign',     offset: '3' },
  { key: 'project4', to: '/projects/fillbo-app',                img: fillboA,      imgHover: fillboB,      category: 'app',           offset: '3' },
  { key: 'project5', to: '/projects/opsify-app',                img: opsifyA,      imgHover: opsifyB,      category: 'app',           offset: '2' },
  { key: 'project6', to: '/projects/webable-accessibility',    img: webableA,     imgHover: webableB,     category: 'app',           offset: '2' },
  { key: 'project7', to: '/projects/heller-garden',             img: hellerA,      imgHover: hellerB,      category: 'brandIdentity', offset: '1' },
  { key: 'project8', to: '/projects/roberto-rebranding',        img: robertoA,     imgHover: robertoB,     category: 'brandIdentity', offset: null },
  { key: 'project9', to: '/projects/control-alt-canc-fanzine',  img: controlAltA,  imgHover: controlAltB,  category: 'editorial',     offset: '3' }
]
