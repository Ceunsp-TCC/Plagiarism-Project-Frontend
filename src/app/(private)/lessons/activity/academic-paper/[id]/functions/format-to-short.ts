export const formatToShort = (link: string) => {
  const originalLinkSize = link.length
  const maxSize = 30
  const enabledToFormat = originalLinkSize > maxSize

  if (enabledToFormat) {
    const shortLink = `${link.substring(0, maxSize - 3)} ...`

    return shortLink
  }

  return link
}
