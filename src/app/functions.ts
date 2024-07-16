import { ElementRef } from '@angular/core';

export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function generateUrlLink(url: string, title: string): string {
  const baseUrl = `${url}/`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  console.log(baseUrl + slug);
  return baseUrl + slug;
}

export function formatForCheckLink(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove non-word chars
}

export function initializeCarousel(
  tabsContainer: ElementRef,
  nextArrow: ElementRef,
  prevArrow: ElementRef
): void {
  const tabs = tabsContainer.nativeElement;
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  tabs.addEventListener('mousedown', (e: { pageX: number }) => {
    isDown = true;
    startX = e.pageX - tabs.offsetLeft;
    scrollLeft = tabs.scrollLeft;
  });
  tabs.addEventListener('mouseleave', () => {
    isDown = false;
  });
  tabs.addEventListener('mouseup', () => {
    isDown = false;
  });
  tabs.addEventListener(
    'mousemove',
    (e: { preventDefault: () => void; pageX: number }) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tabs.offsetLeft;
      const walk = (x - startX) * 2;
      tabs.scrollLeft = scrollLeft - walk;
    }
  );
  // const singleTab = tabs.querySelector('.grid-container');
  // const scrollAmount = singleTab ? singleTab.offsetWidth : tabs.offsetWidth / 3;

  const scrollAmount = 440; // Fixated scroll amount

  nextArrow.nativeElement.addEventListener('click', () => {
    tabs.scrollLeft += scrollAmount;
  });

  prevArrow.nativeElement.addEventListener('click', () => {
    tabs.scrollLeft -= scrollAmount;
  });
}
