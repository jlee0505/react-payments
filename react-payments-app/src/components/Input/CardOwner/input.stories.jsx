import CardOwnerInput from './input';

import '../input.css';

export default {
  title: 'Components/Input/CardOwnerInput',
  component: CardOwnerInput,
};

const Template = (args) => <CardOwnerInput {...args} />;

export const Default = Template.bind({});