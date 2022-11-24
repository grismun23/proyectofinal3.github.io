import Accordion from 'react-bootstrap/Accordion';
import './styles.css'


function FlushExample() {
  return (

    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Recuperar a las especies clave</Accordion.Header>
        <Accordion.Body>
        Este año, el Día Mundial de la Vida Silvestre se celebra bajo el tema: "Recuperar a las especies clave para la restauración de ecosistemas" con el fin de crear conciencia sobre el estado de las especies vida silvestre en peligro y en peligro crítico y resaltar el poder de los esfuerzos de conservación que están en marcha para alterar su destino.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>El incalculable valor de la vida silvestre</Accordion.Header>
        <Accordion.Body>
        El Día Mundial de la Vida Silvestre nos brinda la ocasión de celebrar la belleza y la variedad de la flora y la fauna salvajes, así como de crear conciencia acerca de la multitud de beneficios que la conservación de estas formas de vida tiene para la humanidad.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Cómo puedo participar?</Accordion.Header>
        <Accordion.Body>
        Descubre más cosas sobre las especies animales y vegetales amenazadas, sus características y hábitats, las amenazas a las que se enfrentan y averigua cómo puedes contribuir a su conservación.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;