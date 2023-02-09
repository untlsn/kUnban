declare global {
  // Generate solid-js/like event
  type GenEv<TEv extends Event=Event, TElement extends HTMLElement=HTMLElement> = TEv & { currentTarget: TElement, target: Element }

  // Shortcut
  type Ev             <T extends HTMLElement=HTMLElement> = GenEv<Event,            T>
  type AnimationEv    <T extends HTMLElement=HTMLElement> = GenEv<AnimationEvent,   T>
  type ClipboardEv    <T extends HTMLElement=HTMLElement> = GenEv<ClipboardEvent,   T>
  type CompositionEv  <T extends HTMLElement=HTMLElement> = GenEv<CompositionEvent, T>
  type DragEv         <T extends HTMLElement=HTMLElement> = GenEv<DragEvent,        T>
  type FocusEv        <T extends HTMLElement=HTMLElement> = GenEv<FocusEvent,       T>
  type KeyboardEv     <T extends HTMLElement=HTMLElement> = GenEv<KeyboardEvent,    T>
  type MouseEv        <T extends HTMLElement=HTMLElement> = GenEv<MouseEvent,       T>
  type PointerEv      <T extends HTMLElement=HTMLElement> = GenEv<PointerEvent,     T>
  type TouchEv        <T extends HTMLElement=HTMLElement> = GenEv<TouchEvent,       T>
  type TransitionEv   <T extends HTMLElement=HTMLElement> = GenEv<TransitionEvent,  T>
  type WheelEv        <T extends HTMLElement=HTMLElement> = GenEv<WheelEvent,       T>
  type InputEv        <T extends HTMLElement=HTMLElement> = GenEv<InputEvent,       T>
}

export {};
