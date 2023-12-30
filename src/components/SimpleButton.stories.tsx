import { Meta, StoryObj } from "@storybook/react"
import SimpleButton from "./SimpleButton"

// メタデータの定義とexport default
const meta: Meta = {
  title: "SimpleButton",
  component: SimpleButton,
}
export default meta

// Storyの定義
type Story = StoryObj<typeof SimpleButton>

export const Primary: Story = {
  args: {
    children: "Primary"
  }
}
export const Secondary: Story = {
  args: {
    children: "Secondary"
  }
}