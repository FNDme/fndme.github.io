import { LucideIcon } from "lucide-react";
import * as m from "motion/react-m";
import { Card, CardContent, CardTitle } from "../ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  index,
}: FeatureCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.3,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="bg-gray-100/80 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/30 h-full">
        <CardContent className="p-6">
          <Icon className={`w-8 h-8 ${color} mb-4`} />
          <CardTitle className="lg:text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </m.div>
  );
}
