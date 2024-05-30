import AnimatedText from './AnimatedText.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'AnimatedText',
  component: AnimatedText,
  tags: ['autodocs']
  //argTypes: {
  //  size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  //  backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    id: 'testID',
    text: 'hello world!',
    splitText: 'LETTERS',
    animationDirection: 'UP'
  }
}
