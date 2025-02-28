type BooleanInput = string | boolean | null | undefined;

export function parseBoolean(value: BooleanInput): boolean {
    if (value === true || value === 'true' || value === '1') return true;
    if (value === false || value === 'false' || value === '0') return false;

    throw new Error(
        `Couldn't convert the value: ${value} to a Boolean literal`,
    );
}
