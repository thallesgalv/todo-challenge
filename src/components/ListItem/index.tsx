import React, { ReactNode, memo } from 'react'

import { StyledListItem } from './styles'

type ListItemProps = {
  text: string
  children: ReactNode
  onDragStart: React.DragEventHandler
  onDragEnter: React.DragEventHandler
  onDragEnd: React.DragEventHandler
  onDragOver?: React.DragEventHandler
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  children,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver
}) => {
  return (
    <StyledListItem
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      {children}
      <p>{text}</p>
    </StyledListItem>
  )
}

export default memo(ListItem)
