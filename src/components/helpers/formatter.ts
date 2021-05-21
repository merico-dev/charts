import moment from 'moment';
import numeral from 'numeral';

const getDateTimeFormatter = ({ format }: { format: string }) => (value: any) => moment(value).format(format);

export const MOMENT_YEAR_MONTH_FORMAT = 'YYYY/MM';
export const MOMENT_DATE_FORMAT = 'YYYY/MM/DD';

export const getPeriodFormatter = ({ format }: { format: string }) => (date: any, caller: any) => {
  const shortMode = caller === 'tick';
  // @ts-expect-error ts-migrate(2488) FIXME: Type 'RegExpExecArray | null' must have a '[Symbol... Remove this comment to see the full error message
  const [, scalar0, units] = /(\d*)(\w+)/.exec(format);
  const scalar = +scalar0;
  switch (units) {
    case 'd': {
      const endDate = moment(date).clone().add(scalar, 'days').subtract(1, 'millisecond');
      if (shortMode || scalar === 1) {
        return moment(endDate).format(MOMENT_DATE_FORMAT);
      }
      return `${moment(date).format(MOMENT_DATE_FORMAT)} ~ ${moment(endDate).format(MOMENT_DATE_FORMAT)}`;
    }
    case 'w': {
      const endDate = moment(date).clone().add(scalar, 'weeks').subtract(1, 'millisecond');
      if (shortMode) {
        return moment(endDate).format('YYYY [W]w');
      }
      return `${moment(date).format(MOMENT_DATE_FORMAT)} ~ ${moment(endDate).format(MOMENT_DATE_FORMAT)}`;
    }
    case 'm': {
      const endDate = moment(date).clone().add(scalar, 'months').subtract(1, 'millisecond');
      if (shortMode || scalar === 1) {
        return moment(endDate).format(MOMENT_YEAR_MONTH_FORMAT);
      }
      return `${moment(date).format(MOMENT_YEAR_MONTH_FORMAT)} ~ ${moment(endDate).format(MOMENT_YEAR_MONTH_FORMAT)}`;
    }
    case 'q': {
      const endDate = moment(date).clone().add(scalar, 'quarters').subtract(1, 'millisecond');
      if (shortMode || scalar === 1) {
        return moment(endDate).format('YYYY [Q]Q');
      }
      return `${moment(date).format('YYYY [Q]Q')} ~ ${moment(endDate).format('YYYY [Q]Q')}`;
    }
    case 'y': {
      const endDate = moment(date).clone().add(scalar, 'years').subtract(1, 'millisecond');
      if (shortMode || scalar === 1) {
        return `${moment(endDate).format('YYYY')}`;
      }
      return `${moment(date).format('YYYY')} ~ ${moment(endDate).format('YYYY')}`;
    }
    default:
      throw new Error('Unsupported format');
  }
};

export const getNumeralFormatter = ({ format }: any) => (value: any) => {
  return numeral(value).format(format);
};

export type FormatterFunc = (value: any, ...others: any[]) => any;

export type FormatterConfig = {
  type: 'DATE_TIME' | 'PERIOD' | 'NUMERAL';
  format: string;
};

export type FormatterType = FormatterFunc | FormatterConfig;

export function normalizeFormatter(formatter?: FormatterType): FormatterFunc {
  if (typeof formatter === 'function') {
    return formatter;
  }

  if (typeof formatter === 'object') {
    const { type, format } = formatter;

    if (type === 'DATE_TIME') {
      return getDateTimeFormatter({ format });
    }

    if (type === 'PERIOD') {
      return getPeriodFormatter({ format });
    }

    if (type === 'NUMERAL') {
      return getNumeralFormatter({ format });
    }
  }

  return (val: any) => val;
}
