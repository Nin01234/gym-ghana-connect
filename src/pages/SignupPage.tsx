import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Dumbbell, 
  ArrowLeft,
  ArrowRight,
  Check,
  Calendar,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import groupFitness from "@/assets/group-fitness.jpg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  gender: string;
  fitnessLevel: string;
  goals: string[];
  preferredWorkout: string;
  plan: string;
  agreeToTerms: boolean;
}

export const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    fitnessLevel: "",
    goals: [],
    preferredWorkout: "",
    plan: "free",
    agreeToTerms: false,
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const fitnessGoals = [
    "Weight Loss",
    "Muscle Building",
    "Cardio Fitness",
    "Strength Training",
    "Flexibility",
    "Sports Performance",
    "General Health",
    "Stress Relief"
  ];

  const workoutTypes = [
    "Individual Training",
    "Group Classes",
    "Mixed Training",
    "Home Workouts"
  ];

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "GH₵ 0",
      features: ["Basic workout tracking", "Community access", "Limited classes"]
    },
    {
      id: "standard",
      name: "Standard",
      price: "GH₵ 50/month",
      features: ["All gym access", "Unlimited classes", "Basic nutrition guide", "Mobile app"]
    },
    {
      id: "premium",
      name: "Premium",
      price: "GH₵ 100/month",
      features: ["Personal trainer", "Custom meal plans", "Priority booking", "All features"]
    }
  ];

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    const updatedGoals = formData.goals.includes(goal)
      ? formData.goals.filter(g => g !== goal)
      : [...formData.goals, goal];
    updateFormData("goals", updatedGoals);
  };

  const validateStep = (step: number): boolean => {
    setError("");
    
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          setError("Please fill in all required fields");
          return false;
        }
        if (!formData.email.includes("@")) {
          setError("Please enter a valid email address");
          return false;
        }
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters long");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return false;
        }
        break;
      case 2:
        if (!formData.dateOfBirth || !formData.gender || !formData.fitnessLevel) {
          setError("Please complete your profile information");
          return false;
        }
        if (formData.goals.length === 0) {
          setError("Please select at least one fitness goal");
          return false;
        }
        if (!formData.preferredWorkout) {
          setError("Please select your preferred workout type");
          return false;
        }
        break;
      case 3:
        if (!formData.agreeToTerms) {
          setError("Please agree to the terms and conditions");
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            fitness_goals: formData.goals,
            experience_level: formData.fitnessLevel,
            preferred_workout_time: formData.preferredWorkout,
          }
        }
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        toast({
          title: "Welcome to GymGhana!",
          description: "Please check your email to verify your account.",
        });
        navigate("/login");
      }
    } catch (error) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => updateFormData("firstName", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="phone"
            type="tel"
            placeholder="+233 XX XXX XXXX"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => updateFormData("password", e.target.value)}
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData("confirmPassword", e.target.value)}
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender *</Label>
          <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fitnessLevel">Fitness Level *</Label>
        <Select value={formData.fitnessLevel} onValueChange={(value) => updateFormData("fitnessLevel", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your fitness level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner - New to exercise</SelectItem>
            <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
            <SelectItem value="advanced">Advanced - Regular exerciser</SelectItem>
            <SelectItem value="expert">Expert - Highly experienced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Fitness Goals * (Select all that apply)</Label>
        <div className="grid grid-cols-2 gap-3">
          {fitnessGoals.map((goal) => (
            <div
              key={goal}
              onClick={() => handleGoalToggle(goal)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                formData.goals.includes(goal)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded border ${
                  formData.goals.includes(goal)
                    ? "bg-primary border-primary"
                    : "border-border"
                }`}>
                  {formData.goals.includes(goal) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-sm font-medium">{goal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Preferred Workout Type *</Label>
        <div className="grid grid-cols-2 gap-3">
          {workoutTypes.map((type) => (
            <div
              key={type}
              onClick={() => updateFormData("preferredWorkout", type)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                formData.preferredWorkout === type
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">{type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Choose Your Plan</h3>
        <div className="grid gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => updateFormData("plan", plan.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                formData.plan === plan.id
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    formData.plan === plan.id
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`} />
                  <div>
                    <h4 className="font-semibold">{plan.name}</h4>
                    <p className="text-sm text-muted-foreground">{plan.price}</p>
                  </div>
                </div>
                {plan.id === "standard" && (
                  <Badge variant="secondary">Popular</Badge>
                )}
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-3 h-3 text-success mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
          />
          <div className="text-sm">
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-lg space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:opacity-80 mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="bg-gradient-hero p-3 rounded-lg">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-2xl">GymGhana</div>
                <div className="text-sm text-muted-foreground">Connect</div>
              </div>
            </div>

            <h1 className="text-3xl font-bold">Join Our Community</h1>
            <p className="text-muted-foreground mt-2">
              Start your fitness journey with Ghana's premier gym network
            </p>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-card">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Fitness Profile"}
                {currentStep === 3 && "Choose Your Plan"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Let's start with your basic information"}
                {currentStep === 2 && "Tell us about your fitness goals and preferences"}
                {currentStep === 3 && "Select the plan that works best for you"}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button variant="hero" onClick={nextStep}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    variant="hero" 
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:flex flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${groupFitness})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 flex items-center justify-center p-12">
          <div className="text-white text-center max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Start Your
              <span className="block text-primary-glow">Transformation</span>
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Join thousands of Ghanaians who have transformed their lives 
              through fitness with our expert guidance and world-class facilities.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-sm mb-2 font-medium">What you'll get:</p>
                <ul className="text-sm space-y-1 text-left">
                  <li>✓ Access to 20+ premium gym locations</li>
                  <li>✓ Certified personal trainers</li>
                  <li>✓ Unlimited group fitness classes</li>
                  <li>✓ Personalized workout plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};