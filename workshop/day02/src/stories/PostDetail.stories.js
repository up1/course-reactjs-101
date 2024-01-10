import PostDetail from "../components/PostDetail";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/PostDetail',
  component: PostDetail,
  parameters: {
    post: {
      title: 'Post title',
      body: 'Post body',
      id: 1,
      userId: 1
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
  args: {
    post: {
      title: 'Post title',
      body: 'Post body',
      id: 1,
      userId: 1
    }
  },
};

export const Default = {
  args: {
    post: {
      title: '-',
      body: '-',
      id: 0,
      userId: 0
    }
  },
};

export const NotFound = {
  args: {
    post: {
      title: '-',
      body: '-',
      id: 0,
      userId: 0
    }
  },
};

