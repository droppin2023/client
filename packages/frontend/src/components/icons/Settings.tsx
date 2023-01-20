import { createIcon } from '@chakra-ui/react'

const Settings = createIcon({
  displayName: 'Settings',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.08 21C9.08 22.6569 10.4231 24 12.08 24C12.876 24.0005 13.6396 23.6847 14.2026 23.122C14.7657 22.5594 15.082 21.796 15.082 21V20.827C15.0835 20.5695 15.238 20.3376 15.475 20.237C15.5612 20.1984 15.6545 20.1783 15.749 20.178C15.9185 20.1776 16.0813 20.244 16.202 20.363L16.254 20.415C16.8156 20.9796 17.5797 21.2961 18.376 21.294C20.0329 21.294 21.376 19.9509 21.376 18.294C21.378 17.4972 21.0611 16.7327 20.496 16.171L20.437 16.112C20.26 15.9198 20.2124 15.6416 20.3154 15.4015C20.4184 15.1615 20.6528 15.0042 20.914 15H21C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9H20.83C20.6165 8.99859 20.4174 8.89196 20.298 8.715C20.2838 8.64625 20.2624 8.5792 20.234 8.515C20.126 8.27231 20.1776 7.98824 20.364 7.799L20.416 7.747C20.979 7.18434 21.2954 6.42098 21.2954 5.625C21.2954 4.82902 20.979 4.06566 20.416 3.503C19.8524 2.94202 19.0902 2.62613 18.295 2.624C17.4982 2.62202 16.7337 2.9389 16.172 3.504L16.113 3.563C15.9934 3.67782 15.8338 3.74165 15.668 3.741C15.3047 3.73948 15.0087 3.44916 15 3.086V3C15 1.34315 13.6569 0 12 0C10.3431 0 9 1.34315 9 3V3.17C8.99827 3.38314 8.89167 3.58175 8.715 3.701C8.64638 3.71565 8.57938 3.73709 8.515 3.765C8.27224 3.87242 7.98851 3.82091 7.799 3.635L7.747 3.583C6.57505 2.41022 4.67428 2.40955 3.5015 3.5815C2.32872 4.75345 2.32805 6.65422 3.5 7.827L3.564 7.891C3.74417 8.08098 3.79231 8.36072 3.686 8.6C3.58912 8.89459 3.30997 9.09032 3 9.081C1.34315 9.081 0 10.4241 0 12.081C0 13.7379 1.34315 15.081 3 15.081H3.166C3.4236 15.0829 3.65563 15.2372 3.757 15.474C3.86818 15.7192 3.81822 16.0075 3.631 16.201L3.579 16.253C3.01442 16.8146 2.69791 17.5787 2.7 18.375C2.70389 19.1708 3.02155 19.933 3.584 20.496C4.14666 21.059 4.91002 21.3754 5.706 21.3754C6.50198 21.3754 7.26534 21.059 7.828 20.496L7.887 20.437C8.00674 20.3224 8.16623 20.2586 8.332 20.259C8.42295 20.259 8.51288 20.2781 8.596 20.315C8.89141 20.4107 9.08846 20.6896 9.08 21ZM9.343 18.462C9.028 18.323 8.6873 18.2518 8.343 18.253C7.64793 18.2571 6.98155 18.5306 6.484 19.016L6.416 19.083C6.16323 19.3359 5.79473 19.4348 5.44929 19.3424C5.10385 19.25 4.83396 18.9803 4.74129 18.6349C4.64861 18.2895 4.74723 17.9209 5 17.668L5.058 17.607C5.80615 16.8437 6.02546 15.7071 5.61498 14.7202C5.20451 13.7334 4.24378 13.0875 3.175 13.08H3C2.44772 13.08 2 12.6323 2 12.08C2 11.5277 2.44772 11.08 3 11.08H3.09C4.18551 11.064 5.15831 10.3757 5.538 9.348C5.95144 8.36919 5.73302 7.23762 4.985 6.483L4.917 6.415C4.72922 6.22743 4.62371 5.97291 4.62371 5.7075C4.62371 5.44209 4.72922 5.18757 4.917 5C5.10313 4.80898 5.35829 4.70086 5.625 4.7C5.8912 4.70191 6.14566 4.80988 6.332 5L6.392 5.058C7.11236 5.76824 8.17404 6.0068 9.129 5.673C9.22035 5.66134 9.30957 5.63676 9.394 5.6C10.3653 5.18455 10.9965 4.23138 11 3.175V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V3.09C13.003 4.1472 13.6337 5.10162 14.605 5.519C14.9381 5.66665 15.2986 5.74263 15.663 5.742C16.3571 5.74326 17.0238 5.47133 17.519 4.985L17.586 4.917C17.8718 4.62881 18.3035 4.54198 18.6786 4.69726C19.0536 4.85253 19.2975 5.2191 19.296 5.625C19.2951 5.89002 19.1898 6.14401 19.003 6.332L18.943 6.392C18.2304 7.11105 17.9915 8.1742 18.328 9.129C18.3397 9.22022 18.3639 9.3094 18.4 9.394C18.816 10.3652 19.7694 10.9964 20.826 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20.91C19.8429 13.0072 18.883 13.6505 18.4708 14.6348C18.0586 15.6192 18.2735 16.7545 19.017 17.52L19.084 17.587C19.2721 17.7746 19.3778 18.0293 19.3778 18.295C19.3778 18.5607 19.2721 18.8154 19.084 19.003C18.8964 19.1911 18.6417 19.2968 18.376 19.2968C18.1103 19.2968 17.8556 19.1911 17.668 19.003L17.607 18.943C16.8444 18.1929 15.7067 17.9723 14.719 18.3831C13.7313 18.794 13.0857 19.7563 13.08 20.826V21C13.08 21.5523 12.6323 22 12.08 22C11.5277 22 11.08 21.5523 11.08 21V20.91C11.0635 19.8131 10.3729 18.8398 9.343 18.462Z"
        fill="white"
      />
      <mask id="mask0_736_780" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.08 24C10.4231 24 9.08 22.6569 9.08 21C9.08846 20.6896 8.89141 20.4107 8.596 20.315C8.51256 20.278 8.42228 20.2589 8.331 20.259C8.16521 20.2585 8.00568 20.3223 7.886 20.437L7.827 20.496C7.26434 21.059 6.50098 21.3754 5.705 21.3754C4.90902 21.3754 4.14566 21.059 3.583 20.496C3.02092 19.9328 2.70363 19.1707 2.7 18.375C2.69791 17.5787 3.01442 16.8146 3.579 16.253L3.631 16.201C3.81848 16.0076 3.86847 15.7192 3.757 15.474C3.65563 15.2372 3.4236 15.0829 3.166 15.081H3C1.34315 15.081 0 13.7379 0 12.081C0 10.4241 1.34315 9.081 3 9.081C3.30997 9.09032 3.58912 8.89459 3.686 8.6C3.79231 8.36072 3.74417 8.08098 3.564 7.891L3.5 7.827C2.32805 6.65422 2.32872 4.75345 3.5015 3.5815C4.67428 2.40955 6.57505 2.41022 7.747 3.583L7.799 3.635C7.92021 3.75383 8.08326 3.82027 8.253 3.82C8.34331 3.82006 8.43261 3.80097 8.515 3.764C8.57937 3.73606 8.64637 3.71462 8.715 3.7C8.89151 3.58107 8.99811 3.38283 9 3.17V3C9 1.34315 10.3431 0 12 0C13.6569 0 15 1.34315 15 3V3.086C15.0087 3.44916 15.3047 3.73948 15.668 3.741C15.8338 3.74186 15.9935 3.678 16.113 3.563L16.172 3.504C16.7337 2.9389 17.4982 2.62202 18.295 2.624C19.0902 2.62613 19.8524 2.94202 20.416 3.503C20.979 4.06566 21.2954 4.82902 21.2954 5.625C21.2954 6.42098 20.979 7.18434 20.416 7.747L20.364 7.799C20.1776 7.98824 20.126 8.27231 20.234 8.515C20.2623 8.57924 20.2837 8.64627 20.298 8.715C20.4173 8.89209 20.6165 8.99877 20.83 9H21C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15H20.914C20.6528 15.0042 20.4184 15.1615 20.3154 15.4015C20.2124 15.6416 20.26 15.9198 20.437 16.112L20.496 16.171C21.0611 16.7327 21.378 17.4972 21.376 18.294C21.376 19.9509 20.0329 21.294 18.376 21.294C17.5797 21.2961 16.8156 20.9796 16.254 20.415L16.202 20.363C16.0811 20.2445 15.9183 20.1784 15.749 20.179C15.6546 20.1794 15.5612 20.1995 15.475 20.238C15.238 20.3386 15.0835 20.5705 15.082 20.828V21C15.082 21.796 14.7657 22.5594 14.2026 23.122C13.6396 23.6847 12.876 24.0005 12.08 24ZM8.343 18.253C8.6873 18.2518 9.02801 18.323 9.343 18.462C10.3729 18.8398 11.0635 19.8131 11.08 20.91V21C11.08 21.5523 11.5277 22 12.08 22C12.6323 22 13.08 21.5523 13.08 21V20.826C13.0866 19.7568 13.7323 18.7952 14.7196 18.3846C15.7069 17.9739 16.844 18.1938 17.607 18.943L17.668 19.003C17.8556 19.1911 18.1103 19.2968 18.376 19.2968C18.6417 19.2968 18.8964 19.1911 19.084 19.003C19.2721 18.8154 19.3778 18.5607 19.3778 18.295C19.3778 18.0293 19.2721 17.7746 19.084 17.587L19.017 17.52C18.2735 16.7545 18.0586 15.6192 18.4708 14.6348C18.883 13.6505 19.8429 13.0072 20.91 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20.826C19.7694 10.9964 18.816 10.3652 18.4 9.394C18.3639 9.3094 18.3397 9.22022 18.328 9.129C17.9915 8.1742 18.2304 7.11105 18.943 6.392L19.003 6.332C19.1898 6.14401 19.2951 5.89002 19.296 5.625C19.2975 5.2191 19.0536 4.85253 18.6786 4.69726C18.3035 4.54198 17.8718 4.62881 17.586 4.917L17.519 4.985C17.0238 5.47133 16.3571 5.74326 15.663 5.742C15.299 5.74231 14.9389 5.66635 14.606 5.519C13.6343 5.10193 13.0032 4.14744 13 3.09V3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.175C10.9965 4.23138 10.3653 5.18455 9.394 5.6C9.30965 5.63698 9.22039 5.66157 9.129 5.673C8.17403 6.00655 7.11248 5.76802 6.392 5.058L6.332 5C6.14566 4.80988 5.8912 4.70191 5.625 4.7C5.35829 4.70086 5.10313 4.80898 4.917 5C4.72922 5.18757 4.62371 5.44209 4.62371 5.7075C4.62371 5.97291 4.72922 6.22743 4.917 6.415L4.985 6.483C5.73302 7.23762 5.95144 8.36919 5.538 9.348C5.15854 10.3759 4.1856 11.0643 3.09 11.08H3C2.44772 11.08 2 11.5277 2 12.08C2 12.6323 2.44772 13.08 3 13.08H3.175C4.24378 13.0875 5.20451 13.7334 5.61498 14.7202C6.02546 15.7071 5.80615 16.8437 5.058 17.607L5 17.668C4.74723 17.9209 4.64861 18.2895 4.74129 18.6349C4.83396 18.9803 5.10385 19.25 5.44929 19.3424C5.79473 19.4348 6.16323 19.3359 6.416 19.083L6.484 19.016C6.98161 18.5307 7.64795 18.2572 8.343 18.253ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_736_780)">
        <rect width="24" height="24" fill="white" />
      </g>
    </>
  ),
})

export default Settings