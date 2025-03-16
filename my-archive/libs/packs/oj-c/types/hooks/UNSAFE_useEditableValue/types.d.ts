type Converter<V, DV> = {
    format(value: V): DV;
    parse(displayValue: DV): V;
};
type Optional<V> = V | null | undefined;
type ValidState = 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
export type { Converter, Optional, ValidState };
