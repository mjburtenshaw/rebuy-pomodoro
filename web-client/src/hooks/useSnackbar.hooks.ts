import { OptionsObject, useSnackbar as useNotistack } from 'notistack';
import { utils, Breakpoint, XAnchor, YAnchor } from '../utils';

type DynamicAnchorOriginArgs = {
  limit: Breakpoint;
  xBreakpointAnchorIn: XAnchor;
  xBreakpointAnchorOut: XAnchor;
  yBreakpointAnchorIn: YAnchor;
  yBreakpointAnchorOut: YAnchor;
};

type SnackbarOptions = {
  dynamicAnchorOrigin?: DynamicAnchorOriginArgs;
};

const getDynamicAnchorOrigin = (args: DynamicAnchorOriginArgs) => {
  const xBreakpointAnchorRule = utils.window.buildBreakpointAnchorRule<XAnchor>(
    args.xBreakpointAnchorIn,
    args.xBreakpointAnchorOut,
  );
  const yBreakpointAnchorRule = utils.window.buildBreakpointAnchorRule<YAnchor>(
    args.yBreakpointAnchorIn,
    args.yBreakpointAnchorOut,
  );
  const dynamicAnchorOrigin = utils.window.getDynamicAnchorOrigin(
    args.limit,
    xBreakpointAnchorRule,
    yBreakpointAnchorRule,
  );
  return dynamicAnchorOrigin;
};

export function useSnackbar(snackbarOptions?: SnackbarOptions) {
  const { enqueueSnackbar } = useNotistack();
  const dynamicAnchorOriginArgs = snackbarOptions?.dynamicAnchorOrigin;
  return {
    notify: (message: string, optionOverrides?: OptionsObject) => {
      let options: OptionsObject = {};
      if (dynamicAnchorOriginArgs) {
        const dynamicAnchorOrigin = getDynamicAnchorOrigin(
          dynamicAnchorOriginArgs,
        );
        options.anchorOrigin = dynamicAnchorOrigin;
      }
      options = { ...options, ...optionOverrides };
      enqueueSnackbar(message, options);
    },
  };
}
