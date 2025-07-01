import { datum_points, TDatum } from 'data/datum'

type DatumItem = TDatum[string]

export default function useDatumType(type: string): DatumItem[] | null {
    switch (type) {
        case 'Skill':
            const skills: DatumItem[] = []
            Object.keys(datum_points).forEach((datum) => {
                if (datum_points[datum].Type === 'Skill') {
                    skills.push(datum_points[datum])
                }
            })
            return skills
        case 'Project':
            const projects: DatumItem[] = []
            Object.keys(datum_points).forEach((datum) => {
                if (datum_points[datum].Type === 'Project') {
                    projects.push(datum_points[datum])
                }
            })
            return projects
        default:
            return null
    }
}
