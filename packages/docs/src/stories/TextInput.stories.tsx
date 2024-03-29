import { Box, Text, TextInput, TextInputProps } from '@coderise-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    prefix: '',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size="sm">Username</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Text here',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
