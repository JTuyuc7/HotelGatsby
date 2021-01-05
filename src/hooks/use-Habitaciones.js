import { graphql, useStaticQuery} from 'gatsby';

const useHabitaciones = () => {

    const datos = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
            nodes{
                titulo
                id
                contenido
                slug
                imagen{
                    fluid( maxWidth: 1200 ){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
            }
        }
    `);

    //console.log(datos);

    return datos.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug

    }) )
}
 
export default useHabitaciones;