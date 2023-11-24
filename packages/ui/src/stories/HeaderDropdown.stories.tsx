import type { Meta, StoryObj } from "@storybook/react";

import { HeaderDropdown } from "../headerDropdown";
import { AiFillBell } from "react-icons/ai";

const meta = {
  title: "Atoms/HeaderDropdown",
  component: HeaderDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    placement: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
    color: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    fullSized: {
      table: {
        disable: true,
      },
    },
    gradientDuoTone: {
      table: {
        disable: true,
      },
    },
    gradientMonochrome: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    isProcessing: {
      table: {
        disable: true,
      },
    },
    processingLabel: {
      table: {
        disable: true,
      },
    },
    processingSpinner: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    pill: {
      table: {
        disable: true,
      },
    },
    positionInGroup: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof HeaderDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    mode: "primary",
    children: <DummyComponent />,
    placement: "top",
  },
};

export const Default: Story = {
  args: {
    label: "Default",
    mode: "default",
    children: <DummyComponent />,
  },
};

export const Plain: Story = {
  args: {
    label: "Plain",
    mode: "plain",
    children: <DummyComponent />,
  },
};

//Large size not working : Issue pending
// export const Size: Story = {
//   args: {
//     label: "Large",
//     size: "lg",
//     children: <DummyComponent />,
//   },
// };

export const WithChildren: Story = {
  args: {
    label: "Click Me",

    children: <DummyComponent />,
  },
};

function DummyComponent() {
  return (
    <>
      <HeaderDropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          bonnie@flowbite.com
        </span>
      </HeaderDropdown.Header>
      <HeaderDropdown.Item icon={<AiFillBell />}>Item 1</HeaderDropdown.Item>
      <HeaderDropdown.Item icon={<AiFillBell />}>Item 2</HeaderDropdown.Item>
      <HeaderDropdown.Item icon={<AiFillBell />}>Item 3</HeaderDropdown.Item>
      <HeaderDropdown.Divider />
      <HeaderDropdown.Item icon={<AiFillBell />}>Item 4</HeaderDropdown.Item>
    </>
  );
}
