import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/magicui/terminal';

function TerminalDemo() {
  return (

    <Terminal className="w-[280px] h-[280px] overflow-y-auto">

      <TypingAnimation>&gt; dplh food random 1</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Your Food Option: Thai</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Found 5 results in 5kms</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Display top 1</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-blue-500">
        <span>Lemongrass Haven</span>
        <span className="pl-2 text-blue-300">- 18 Lotus Ave, Auckland</span>
        <span className="pl-2 text-orange-300">- Crispy Pad Thai</span>
        <span className="pl-2 text-orange-300">- Golden Coconut Curry</span>
      </AnimatedSpan>

      <TypingAnimation delay={4500} className="text-muted-foreground">
        Enjoy!
      </TypingAnimation>

    </Terminal>

  );
}

export default TerminalDemo;
