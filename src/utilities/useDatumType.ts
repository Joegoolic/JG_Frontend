import { datum_points } from 'data/datum'
export default function useDatumType(type: string) {
    switch (type) {
        case 'Skill':
            const skills: string[] = []
            Object.keys(datum_points).forEach((datum) => {
                if (datum_points[datum].Type === 'Skill') {
                    skills.push(datum_points[datum])
                }
            })
            return skills
        case 'Project':
            const projects: string[] = []
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
