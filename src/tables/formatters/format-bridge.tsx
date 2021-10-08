import icons from './icons'

export function formatBridge(
  name: string,
  renderIcon: boolean = true,
) : JSX.Element {
  // Quickfix
  if (name === 'celer') name = 'cbridge'

  // @ts-ignore
  const icon = icons && icons[name]
  return (
    <>
      {renderIcon && icon && (
        <img
          style={{ width: '15px', height: 'auto', marginRight: '10px' }}
          alt={name}
          src={icon}
        />
      )}
      {name}
    </>
  )
}
