import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalPortal } from "./ModalPortal";

export default {
  title: "Components/Modal/ModalPortal",
  component: ModalPortal,
} as ComponentMeta<typeof ModalPortal>;

const Template: ComponentStory<typeof ModalPortal> = (args) => <ModalPortal />;

export const Default = Template.bind({});
Default.args = {};
