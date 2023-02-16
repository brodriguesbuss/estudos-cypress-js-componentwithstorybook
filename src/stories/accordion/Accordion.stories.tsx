import { ComponentMeta, ComponentStory } from "@storybook/react";
import Accordion from './Accordion';


export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    items: {  
        title: 'string',
        content: 'string'
    } as unknown as any,
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const OneAccordion = Template.bind({});
OneAccordion.args = {
    items:[{
        title:'Quem foi a primeira pessoa a viajar no Espaço?', 
        content: "Yuri Gagarin. O russo Yuri Gagarin (1934-1968) foi a primeira pessoa a viajar para o espaço, o que aconteceu em 12 de abril de 1961."
    }]
};


export const TwoAccordion = Template.bind({});
TwoAccordion.args = {
    items:[{
        title:'Qual a montanha mais alta do mundo?', 
        content:'Monte Everest. O Monte Everest tem 8.848 metros de altitude e localiza-se no Nepal, um país asiático que faz fronteira com a China e com a Índia.'
    },{
        title:'Onde se localiza Machu Picchu?', 
        content:'Peru'
    }]
};

export const ThreeAccordion = Template.bind({});
ThreeAccordion.args = {
    items:[{
        title:'Que país tem o formato de uma bota?', 
        content:'Itália'
    },{
        title:'Quem inventou a lâmpada?', 
        content:'Thomas Edison'
    },{
        title:'Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?', 
        content:'Aproximadamente 24 horas. A Terra demora aproximadamente 24 horas, mais precisamente 23 horas, 56 minutos e 4 segundos para dar uma volta completa em torno do seu próprio eixo. Esse movimento recebe o nome de rotação.'
    }]
};