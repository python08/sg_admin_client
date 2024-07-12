export const style = (color: string) => `
.marquee-container {
    overflow: hidden;
    width: 15rem;
    display: flex;
    border-radius: 10px;
  }
  
  .marquee-content {
    flex: 0 0 auto;
    white-space: nowrap; /* Prevent content wrapping */
    animation: marquee 15s linear infinite; /* Animation definition */
    padding-right: 10px;
    color: ${color};
    animation-delay: 5s;  /* Delay by 2 seconds */
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    } /* Start from right */
    100% {
      transform: translateX(-200%);
    } /* Scroll to left */
  }
`;
