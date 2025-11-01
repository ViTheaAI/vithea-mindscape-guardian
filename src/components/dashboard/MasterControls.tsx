import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Filter, Download } from "lucide-react";

interface MasterControlsProps {
  selectedGrade: string;
  selectedRiskLevel: string;
  selectedTimeRange: string;
  selectedGender: string;
  onGradeChange: (grade: string) => void;
  onRiskLevelChange: (risk: string) => void;
  onTimeRangeChange: (range: string) => void;
  onGenderChange: (gender: string) => void;
  onRefresh: () => void;
}

const MasterControls = ({
  selectedGrade,
  selectedRiskLevel,
  selectedTimeRange,
  selectedGender,
  onGradeChange,
  onRiskLevelChange,
  onTimeRangeChange,
  onGenderChange,
  onRefresh
}: MasterControlsProps) => {
  return (
    <Card className="bg-card border border-card-border shadow-soft p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Master Controls:</span>
        </div>
        
        {/* Grade Level Filter */}
        <div className="min-w-[140px]">
          <Select value={selectedGrade} onValueChange={onGradeChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Grade Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              <SelectItem value="elementary">Elementary (K-5)</SelectItem>
              <SelectItem value="middle">Middle (6-8)</SelectItem>
              <SelectItem value="high">High School (9-12)</SelectItem>
              <SelectItem value="grade-k">Kindergarten</SelectItem>
              <SelectItem value="grade-1">Grade 1</SelectItem>
              <SelectItem value="grade-2">Grade 2</SelectItem>
              <SelectItem value="grade-3">Grade 3</SelectItem>
              <SelectItem value="grade-4">Grade 4</SelectItem>
              <SelectItem value="grade-5">Grade 5</SelectItem>
              <SelectItem value="grade-6">Grade 6</SelectItem>
              <SelectItem value="grade-7">Grade 7</SelectItem>
              <SelectItem value="grade-8">Grade 8</SelectItem>
              <SelectItem value="grade-9">Grade 9</SelectItem>
              <SelectItem value="grade-10">Grade 10</SelectItem>
              <SelectItem value="grade-11">Grade 11</SelectItem>
              <SelectItem value="grade-12">Grade 12</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Risk Level Filter */}
        <div className="min-w-[140px]">
          <Select value={selectedRiskLevel} onValueChange={onRiskLevelChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="critical">Critical Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
              <SelectItem value="moderate">Moderate Risk</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="minimal">Minimal Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Range Filter */}
        <div className="min-w-[140px]">
          <Select value={selectedTimeRange} onValueChange={onTimeRangeChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-week">Current Week</SelectItem>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="current-semester">Current Semester</SelectItem>
              <SelectItem value="current-year">Academic Year</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-90-days">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gender Filter */}
        <div className="min-w-[120px]">
          <Select value={selectedGender} onValueChange={onGenderChange}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Students</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other/Prefer Not to Say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 ml-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRefresh}
            className="h-9"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MasterControls;