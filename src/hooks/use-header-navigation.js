import { useCallback, useState } from 'react';

export default function useHeaderNavigation(defaultValues) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMenuContent, setDropdownMenuContent] = useState(defaultValues);
  const [lastFocusedLink, setLastFocusedLink] = useState(null);

  const handleFocus = useCallback(
    (label, content) => () => {
      if (label && content) {
        setDropdownOpen(true);
        setDropdownMenuContent({ label, content });
      }
    },
    []
  );

  const handleBlur = useCallback(
    (event) => {
      const dropdown = document.querySelector('[role="menu"]');
      if (event?.relatedTarget instanceof Node && dropdown?.contains(event.relatedTarget)) {
        return;
      }
      setDropdownOpen(false);
      setDropdownMenuContent(defaultValues);
    },
    [defaultValues]
  );

  const handleClose = useCallback(
    () => () => {
      setDropdownOpen(false);
      setDropdownMenuContent(defaultValues);
      setLastFocusedLink(null);
    },
    [defaultValues]
  );

  const handleMenuKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        document.activeElement.blur();
        handleClose();
      }
      if (event.key === 'ArrowDown' && isDropdownOpen) {
        event.preventDefault();
        setLastFocusedLink(event.target);
        const dropdown = document.querySelector('[role="menu"]');
        const firstFocusable = dropdown?.querySelector('a, button, [tabindex="0"]');
        firstFocusable?.focus();
      }
    },
    [handleClose, isDropdownOpen]
  );

  const handleDropdownKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        document.activeElement.blur();
        handleClose();
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();

        const dropdown = document.querySelector('[role="menu"]');
        const focusableElements = Array.from(
          dropdown?.querySelectorAll('a, button, [tabindex="0"]') || []
        );
        const currentIndex = focusableElements.indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          focusableElements[nextIndex]?.focus();
        } else if (event.key === 'ArrowUp') {
          const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          focusableElements[prevIndex]?.focus();
        }
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        const dropdown = document.querySelector('[role="menu"]');
        const focusableElements = Array.from(
          dropdown?.querySelectorAll('a, button, [tabindex="0"]') || []
        );
        const currentIndex = focusableElements.indexOf(document.activeElement);

        const headerFocusableElements = Array.from(
          document.querySelectorAll(
            'header a:not([style*="display: none"]), header button:not([style*="display: none"]), header [tabindex="0"]:not([style*="display: none"])'
          )
        );
        const currentLinkIndex = headerFocusableElements.indexOf(lastFocusedLink);

        handleClose();

        if (currentIndex === focusableElements.length - 1 && !event.shiftKey) {
          if (dropdownMenuContent?.label === 'Docs') {
            const pricingLink = headerFocusableElements.find((el) => el.textContent === 'Pricing');
            pricingLink?.focus();
            return;
          }
          const nextIndex = (currentLinkIndex + 1) % headerFocusableElements.length;
          headerFocusableElements[nextIndex]?.focus();
          return;
        }

        if (event.shiftKey) {
          const prevIndex =
            currentLinkIndex <= 0 ? headerFocusableElements.length - 1 : currentLinkIndex - 1;
          headerFocusableElements[prevIndex]?.focus();
        } else {
          const nextIndex = (currentLinkIndex + 1) % headerFocusableElements.length;
          headerFocusableElements[nextIndex]?.focus();
        }
      }
    },
    [handleClose, lastFocusedLink, dropdownMenuContent?.label]
  );

  return {
    isDropdownOpen,
    setDropdownOpen,
    dropdownMenuContent,
    handleFocus,
    handleBlur,
    handleMenuKeyDown,
    handleDropdownKeyDown,
  };
}
