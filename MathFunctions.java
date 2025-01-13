public class MathFunctions {

    public static double sum(double[] values) {
        double result = 0;
        for (double value : values) {
            result += value;
        }
        return result;
    }

    public static double average(double[] values) {
        double sum = sum(values);
        return sum / values.length;
    }

    public static double max(double[] values) {
        double max = values[0];
        for (double value : values) {
            if (value > max) {
                max = value;
            }
        }
        return max;
    }

    public static double min(double[] values) {
        double min = values[0];
        for (double value : values) {
            if (value < min) {
                min = value;
            }
        }
        return min;
    }

    public static int count(double[] values) {
        int count = 0;
        for (double value : values) {
            if (value != 0) { // Assuming zero as non-numeric for this example
                count++;
            }
        }
        return count;
    }
}

