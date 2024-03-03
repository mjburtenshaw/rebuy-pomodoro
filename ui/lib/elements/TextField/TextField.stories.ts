import type { Meta } from '@storybook/react';
import { TextField } from './TextField.styled';
import { textFieldMocks } from './TextField.mocks';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
  args: {
    error: false,
    multiline: true,
    placeholder: 'This is a placeholder',
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Rhoncus urna neque viverra justo nec ultrices dui sapien.
Sit amet aliquam id diam.
Quam nulla porttitor massa id.
Tristique magna sit amet purus gravida quis blandit turpis.
Erat pellentesque adipiscing commodo elit at.
Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean.
Erat imperdiet sed euismod nisi porta lorem.
Varius sit amet mattis vulputate enim.
Mi quis hendrerit dolor magna eget est lorem ipsum.
Mauris augue neque gravida in fermentum et sollicitudin ac.
Non curabitur gravida arcu ac tortor dignissim convallis.
Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
Volutpat ac tincidunt vitae semper quis lectus.
Scelerisque mauris pellentesque pulvinar pellentesque habitant.
Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
Leo a diam sollicitudin tempor id eu nisl nunc mi.
Dictum varius duis at consectetur lorem donec massa sapien.
Id aliquet lectus proin nibh.`,
  },
};

export default meta;

export const Default = textFieldMocks.default;
